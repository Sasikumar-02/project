import React from 'react'
import { DatePicker } from 'antd';
import '../styles/ProductCard.css'


const { RangePicker } = DatePicker;
interface ProductCardProps {
    title: string;
    btnList: string[]; // Assuming btnList is an array of strings
    children?: React.ReactNode; // Optional children
  }

const ProductCard:React.FC<ProductCardProps>=({title,btnList,children}) =>{
    const [activeItem, setActiveItem] = React.useState(0);
    const onChange = (e:any) => {        
    };
  
  return (
    <div className="m-4">
        <h5 className="my-4 fw-bold  card-header">{title}</h5>
        <div className="main-content bg-white  border rounded border-2">
            <div className="border-muted ">
                <div className="d-flex main-content-tabs justify-content-between ">
                    <div className='d-flex tabs border rounded border-2 mt-4 ms-4 '>
                    {
                        btnList?.map((item:any,index:any) => (
                            <div onClick={() => {
                                setActiveItem(index);
                                item.onClick()
                              }} className={activeItem == index ? `main-content-tabs-text active rounded-1 d-flex px-3 py-2 m-1` : `main-content-tabs-text rounded d-flex px-3 py-2 m-1`}>
                                <h3  className="ms-2 content-text">{item.label}</h3>
                            </div>
                        ))
                    }
                    </div>
                    <div className='d-flex gap-2  mt-auto mx-4'>
                    <p className='my-auto text-primary-blue'>Choose the Date Range</p>
                    <RangePicker className='d-flex align-items-stretch date-height'/>
                    </div>
                </div>
            </div>
            <div className='children-content  p-4'>
                {children}
            </div>
            </div> 
    </div>
  )
}

export default ProductCard