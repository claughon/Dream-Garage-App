let token = `9ec74c4e38aae56260c8cd67`

export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://the-great-car-emporium.herokuapp.com/api/cars`,{    
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://the-great-car-emporium.herokuapp.com/api/cars`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }
        console.log('create is working')

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://the-great-car-emporium.herokuapp.com/api/cars/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error(`Failed to Update Car ID ${id} on server`)
        }
    },
    delete: async(id:string) => {
        const response = await fetch(`https://the-great-car-emporium.herokuapp.com/api/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if(!response.ok){
            throw new Error(`Failed to Delete Car ID ${id} on server`)
        }
        return await response.json()
    }
}