import { useEffect ,useState } from "react"
import {PropTypes} from 'prop-types'

const TestUseEffect = (props) => {
    const {resources} = props
    const [type,setType] = useState('posts')
    const [posts,setPosts] = useState([])
    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data =>{
                setPosts(data)
            })
            .catch(err => console.log(err))
    },[type])

    return (
        <> 
            {
                resources.map(el => {
                    return (
                        <button 
                        key={el} 
                        style={
                            type===el ? {
                                color :'#fff',
                                backgroundColor : '#333'
                            }: {}
                        }
                        onClick = {() => setType(el)}
                        >{el}</button>
                    )
                })
            }
            {
             posts.map((el,index) => {
                    return (
                        <div key={el.id}>
                            <h3>{el.title || el.name}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}

TestUseEffect.propTypes  = {
    resources : PropTypes.array 
}

export default TestUseEffect