import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'/* , 'Samurai X', 'Dragon Ball' */]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        return setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                /* setCategories={setCategories} */
                onNewCategory={onAddCategory}
            />

            {/* Listado de Gif */}
            {
                categories.map((category) => (
                        <GifGrid 
                            key={category} 
                            category={category} 
                        />
                    )
                )
            }
        </>
    )
}

export default GifExpertApp
