import { CategoryItem, CategoryList, ContainerChartCategory } from "./styles"
import { AiOutlineHome } from "react-icons/ai"

import mock from "../../mock/mock.json"
import { useEffect, useRef, useState } from "react"
import { PieChart } from "@mui/x-charts"
const CategoryChart = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categories] = useState(mock.categories)
  const [chartWidth, setChartWidth] = useState(0)
  const chartContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (chartContainerRef.current) {
        setChartWidth(chartContainerRef.current.offsetWidth)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const data = categories.map((category) => {
    return {
      label: category.title,
      value: category.percentage,
      color: category.color,
    }
  })
  const series = [
    {
      innerRadius: 60,
      outerRadius: 120,
      id: "series-2",
      data: data,
      cx: chartWidth / 2.5
    },
  ]
  return (
    <ContainerChartCategory>
      <p className='title'>Gastos por Categoria</p>
      <div className='chart-container' ref={chartContainerRef}>
        <PieChart
          series={series}
          width={chartWidth * 0.8}
          height={300}
          slotProps={{ legend: { hidden: true } }}
        />
      </div>
      <CategoryList>
        {categories.map((item) => (
          <CategoryItem key={item.title}>
            <section>
              <div
                className='container-icon'
                style={{ backgroundColor: `${item.color}` }}>
                <AiOutlineHome />
              </div>
              <span>{item.title}</span>
            </section>
            <p className='percentage'>{item.percentage}%</p>
          </CategoryItem>
        ))}
      </CategoryList>
    </ContainerChartCategory>
  )
}

export default CategoryChart
