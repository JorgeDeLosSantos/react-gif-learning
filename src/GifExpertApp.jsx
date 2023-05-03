// import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; // usando archivos de barril
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    return (
        <>
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            onNewCategory={ event => onAddCategory(event) }
        />

        {/* <button onClick={onAddCategory}>Agregar</button> */}

        {
        categories.map((category) => (
                <GifGrid 
                    key={category} 
                    category={category}
                />
            ))
        }
        </>
    )
}