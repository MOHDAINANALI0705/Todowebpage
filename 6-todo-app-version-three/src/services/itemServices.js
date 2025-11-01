export const addItemToServer = async(task,date) =>{
    const response = await fetch("https://todowebpage-nav9.vercel.app//api/todo",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({task,date})
    })
    const item =  await response.json()
    return mapServerItem(item);
}

export const getItems = async() =>{
    const response = await fetch("https://todowebpage-nav9.vercel.app//api/todo",{
        method: "GET",
    })
    const items =  await response.json()
    return items.map(mapServerItem);
}

export const markCompleted = async() =>{
    const response = await fetch(`https://todowebpage-nav9.vercel.app//${id}/completed`,{
        method: "PUT",
    })
    const item =  await response.json()
    return mapServerItem(item);
}

export const deleteItem = async (id) =>{
     await fetch(`https://todowebpage-nav9.vercel.app//${id}`,{
        method: "DELETE",
    })
    return id;
}

const mapServerItem = (serverItem) =>{
    return{
        id:serverItem._id,
        name:serverItem.task,
        dueDate:serverItem.date,
        completed:serverItem.completed,
        createdAt:serverItem.createdAt,
        updatedAt:serverItem.updatedAt,
    }
}

