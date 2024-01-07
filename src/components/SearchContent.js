import { Component } from "react"
import '../styles/SearchContent.css';

class SearchContent extends Component{
    render(){
        return(
            <div class='search-content'>
                <div class='search-content__row'>
                    <form action="/api/character/symbol" method="get" onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit(e.target.name.value);
                    }.bind(this)}>
                        <input type="text" name="name" placeholder="캐릭터명을 입력하세요" class='search-field'></input>
                        <button type="submit" class="search-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
export default SearchContent;
