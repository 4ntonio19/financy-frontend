import { CategoryItem, CategoryList, ContainerChartCategory } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { useEffect, useRef, useState } from 'react'
import { PieChart } from '@mui/x-charts'
import { formatCurrency } from '../../utils/formatterCurrency'
import { useGetCategoriesQuery } from '../../services/categoryService'
const CategoryChart = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: categories } = useGetCategoriesQuery(false)
  const [chartWidth, setChartWidth] = useState(0)
  const chartContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (chartContainerRef.current) {
        setChartWidth(chartContainerRef.current.offsetWidth)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // const data = categories?.map(category => {
  //   return {
  //     label: category.title,
  //     value: category.transactionPercentage, // Convert the value to a number
  //     color: category.color,
  //   }
  // })

  const series = [
    {
      innerRadius: 60,
      outerRadius: 120,
      id: 'series-2',
      data: categories ?? [],
      cx: chartWidth / 2.5,
    },
  ]
  return (
    <ContainerChartCategory>
      <p className="title">Gastos por Categoria</p>
      {categories && categories?.length > 0 ? (
        <div className="chart-container" ref={chartContainerRef}>
          <PieChart
            series={series}
            width={chartWidth * 0.8}
            height={300}
            slotProps={{ legend: { hidden: true } }}
          />
        </div>
      ) : (
        <span>Crie novas transações de saída.</span>
      )}

      <CategoryList>
        {categories?.map(item => (
          <CategoryItem key={item.label}>
            <section>
              <div
                className="container-icon"
                style={{ backgroundColor: `${item.color}` }}
              >
                <FontAwesomeIcon icon={item.icon as IconProp} />
              </div>
              <span>{item.label}</span>
            </section>
            <p className="percentage">
              {formatCurrency(item.spent)} | {item.value}%
            </p>
          </CategoryItem>
        ))}
      </CategoryList>
    </ContainerChartCategory>
  )
}

export default CategoryChart
