interface APIType {
    userId: number
    id: number,
    title: string
    completed: boolean
}

export async function apiCallHandling(): Promise<APIType> {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/4');
    const data = await result.json();
    // console.log(data);
    return data

}

apiCallHandling().then((data: APIType) => {
    console.log(data);
});