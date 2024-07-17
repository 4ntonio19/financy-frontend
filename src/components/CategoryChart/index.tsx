import { CategoryItem, CategoryList, ContainerChartCategory } from "./styles"
import ChartImg from "../../assets/Pie Chart.png"
import { AiOutlineHome } from "react-icons/ai"

import categoriesList from "../../mock/categories.json"
import { useState } from "react"
const CategoryChart = () => {
    const [categories, setCategories] = useState(categoriesList)
  return (
    <ContainerChartCategory>
      <p className='title'>Gastos por Categoria</p>
      <img src={ChartImg} alt='imagem de gráfico do gasto por categorias' />
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
            <p className='percentage'>{item.percentage.toFixed(2)}%</p>
          </CategoryItem>
        ))}
      </CategoryList>
    </ContainerChartCategory>
  )
}

export default CategoryChart
