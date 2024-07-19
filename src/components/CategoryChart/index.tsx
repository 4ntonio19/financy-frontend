import { CategoryItem, CategoryList, ContainerChartCategory } from "./styles"
import { AiOutlineHome } from "react-icons/ai"

import categoriesList from "../../mock/categories.json"
import { useState } from "react"
import { PieChart } from "@mui/x-charts"
const CategoryChart = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categories, setCategories] = useState(categoriesList)
  const data = categories.map((category) => {
    return {
      label: category.title,
      value: category.percentage,
      color: category.color
    }
  })
  const series = [
    {
      innerRadius: 60,
      outerRadius: 120,
      id: "series-2",
      data: data,
      cx: 150
    },
  ]
  return (
    <ContainerChartCategory>
      <p className='title'>Gastos por Categoria</p>
      <div className="chart-container">
        <PieChart series={series} width={300} height={300} slotProps={{ legend: { hidden: true } }} />
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
