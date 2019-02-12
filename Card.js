function Card(props){
    console.log(props)
const name = "Cody Summers";
// const title = "React form the start"
const title = props.title;
const saleOn = false;
   return (
    <div className="row">
    <div className="col s2">
    <div className="card hoverable small">
        <div className="card-image">
            <img src="http://lorempixel.com/400/400/nature/" />
        </div>
        <div className="card-content">
            <p>{title}</p>
            <p>{name}</p>
        </div>
        <div className="card-action">
            <a href="#">${saleOn ? 9.99 : 59.99}</a>
        </div>
    </div>
</div>    
</div>
   ) 
    
}
