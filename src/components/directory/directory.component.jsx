import Category from '../category/category.component'
import './directory.styles.css';

const Directory = ({ categories }) => {
    return (
        <div class='directories-container'>
            {categories.map((category) => (
                <Category key={category.id} category={category} />
            ))}
        </div>
    )
}

export default Directory;