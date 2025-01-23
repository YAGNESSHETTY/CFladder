import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './table.css'

const PrintTable = (props) => {
    const problemsArray = props.array;
    return (
        <div className="container ">
            <div className="">
                <div className="tabl pt-2 container">
                    <table className="table table tabl " style={{ backgroundColor: "#" }}>
                        <thead className="thead-dark ">
                            <tr className="text-center text-light king ">
                                <th scope="col">#</th>
                                <th scope="col">Rating </th>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                problemsArray.map((item, i) => {
                                    const cla = "link-primary "
                                    const alreadysolved = item.solved && item.lock;
                                    const openacc = item.solved && !item.lock;
                                    const openaccClass = openacc ? "text-center table-success" : "text-center ";
                                    return (
                                        <>
                                            <tr className={openaccClass} >
                                                <td scope="row" >
                                                    <p>{i + 1}</p></td>
                                                <td style={{ marginLeft: '10px' }}> <p> {item.rating}</p></td>
                                                <th >
                                                    {item.lock ?
                                                        <p >{item.name}</p> :
                                                        <a className={cla} href={`https://codeforces.com/contest/${item.contestId}/problem/${item.index}`} target="_blank">{item.name}</a>
                                                    }
                                                </th>
                                                {item.solved ?

                                                    <td style=
                                                        {openacc ?
                                                            { backgroundColor: "#86fa86" } :
                                                            {}} >
                                                        {alreadysolved ?
                                                            <div className="font-weight-bold" style={{ color: '#7cf07c', fontWeight: '900' }} >
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                                </svg>
                                                            </div> :
                                                            <div className="tick" style={{ backgroundColor: '#86fa86', fontWeight: "500" }} >
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                                </svg>
                                                            </div>}
                                                    </td>
                                                    :
                                                    <td  >— </td>
                                                }
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div >
            </div>
        </div>
    )


}

export default PrintTable;


// import React from "react";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import './table.css'

// const PrintTable = (props) => {
//     const problemsArray = props.array;
//     return (
//         <div className="tabl pt-2 container">

//             <table className="table table-light table" style={{ backgroundColor: "#" }}>
//                 <thead>
//                     <tr className="text-center">
//                         <th scope="col">#</th>
//                         <th scope="col">rating </th>
//                         <th scope="col">Name</th>
//                         <th scope="col">status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         problemsArray.map((item, i) => {
//                             const cla = "link-primary "
//                             const alreadysolved = item.solved && item.lock;
//                             const openacc = item.solved && !item.lock;
//                             const openaccClass = openacc ? "text-center table-success" : "text-center table-default";
//                             return (
//                                 <>
//                                     <tr className={openaccClass} style={openacc ? { backgroundColor: '#fff', borderTop: 'none' } : { backgroundColor: "#fff" }}>
//                                         <td scope="row" >
//                                             <p>{i + 1}</p></td>
//                                         <td> <p> {item.rating}</p></td>
//                                         <th >
//                                             {item.lock ? <p >{item.name}</p> : <a className={cla} href={`https://codeforces.com/contest/${item.contestId}/problem/${item.index}`} target="_blank">{item.name}</a>}
//                                         </th>
//                                         {item.solved ?

//                                             <td style={openacc ? { borderTop: 'none', backgroundColor: "#86fa86" } : { borderTop: 'none' }} >
//                                                 {alreadysolved ? <div className="font-weight-bold" style={{ color: '#7cf07c', fontWeight: '900' }} >Accepted </div> : <div className="tick" style={{ backgroundColor: '#86fa86' }} >Accepted</div>}
//                                             </td>
//                                             :
//                                             <td  >— </td>
//                                         }
//                                     </tr>
//                                 </>
//                             )
//                         })
//                     }
//                 </tbody>
//             </table>
//         </div >
//     )


// }

// export default PrintTable;