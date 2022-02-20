import React from "react"

// HOC Using Class Component

// export default function HOC(InnerComponent){
//     return class NewComp extends React.Component{
//         render(){
//             return(
//                 <div className="bg-primary p-3">
//                     <InnerComponent />
//                 </div>
//             )
//         }
//     }
// }

// HOC Using Functional Component

const HOC = (InnerComponent) => {
    const NewComp = () => {
        return (
            <div className="bg-primary p-3">
                <InnerComponent />
            </div>
        )
    }

    return NewComp
}

export default HOC;