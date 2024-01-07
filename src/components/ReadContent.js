import { Component } from "react";
import "../styles/ReadContent.css";

class ReadContent extends Component{

    render(){
        return(
            <article class='article'>
                <table class='table'>
                    <thead>
                        <tr>
                        <th>날짜</th>
                        <th>이름</th>
                        <th>레벨</th>
                        <th>성장치</th>
                        <th>최소일자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.contents.symbol.map((rowData, index) => (
                        <tr key={index}>
                            <td>{this.props.contents.date}</td>
                            <td>{rowData.name}</td>
                            <td>{rowData.symbolLevel}</td>
                            <td>{rowData.symbolGrowthCount} / {rowData.requiredTotalSymbolCount}</td>
                            <td>{rowData.minimumDate}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </article>
        )
    }
}
export default ReadContent;
