import { useQuery } from "react-query"

const useMonthlyBills = () => {
    const { data, isLoading, error, status } = useQuery('billsData', () => fetch('http://localhost:4000/bills', {
        headers: {
            'x-access-token': localStorage.getItem('token')
        },
    }).then(res => res.json()))

    return {
        bills: data?.bills,
        isLoading,
        error,
        status
    }
}

export default useMonthlyBills