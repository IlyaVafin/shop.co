import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useParams } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { useGetProductByIdQuery } from '@/store/productsApi'
export default function useGetPath() {
	const param = useParams()
	const id = param?.id
	const dispatch = useDispatch()

	const cartItem = useSelector((state: RootState) =>
		state.cart.items.find(item => item.id === Number(id))
	)

	const { data, isError, isLoading } = useGetProductByIdQuery(Number(id), {
		skip: !id,
	})
	return {id, cartItem, data, isError, isLoading, dispatch}
}