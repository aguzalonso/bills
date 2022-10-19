import { useMutation } from "react-query"

const useSaveBills = () => {
    const { isSuccess, mutate, isError, isLoading } = useMutation(newBills => {
        return fetch('http://localhost:4000/bills', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            },
            body: JSON.stringify({
                bills: newBills
            })
        })
    })

    return {
        mutate,
        isSuccess,
        isError,
        isLoading
    }
}

export default useSaveBills