import React from 'react'

const ASPECT = 50

function Table({ headers, data }) {
    return (
        <React.Fragment>

            <table className={`table`}>
                <thead>
                    {headers.map(header => <th>{header}</th>)}
                </thead>
                <tbody>
                    {data.map(item => <tr>
                        <td>
                            <img 
                            width={ASPECT}
                            height={ASPECT}
                            src={require(`./imgs/${item.imgSrc}.png`)}/>
                        </td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>)}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default Table
