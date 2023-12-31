import { Component } from "react"

class SearchContent extends Component{
    render(){
        return(
            <article>
                <h2>캐릭터 이름 입력</h2>
                <form action="/api/character/symbol" method="get"
                onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(e.target.name.value);
                }.bind(this)}>
                    <p><input type="text" name="name" placeholder="캐릭터 이름을 입력해주세요"></input></p>
                    <p><input type="submit"></input></p>
                </form>
            </article>
        )
    }
}
export default SearchContent;
