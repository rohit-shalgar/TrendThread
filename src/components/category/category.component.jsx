import './category.styles.css';

const Category = ({ category }) => {
    const { imageUrl, title } = category;
    return (<div className='individual-Catogeries'>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className='category-body'>
            <h2>{title}</h2>
            <p>Shop now</p>
        </div>
    </div>)                
}

export default Category;