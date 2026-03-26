function Table({children}){
    return (
        <div className="table">
            <h2> 
                {children} x 1 = {children *1}
            </h2>
            <h2>
                {children} x 2 = {children *2}
            </h2>   
            <h2>
                {children} x 3 = {children *3}
            </h2>   
            <h2>
                {children} x 4 = {children *4}
            </h2>   
            <h2>
                {children} x 5 = {children *5}
            </h2>   
                <h2> 
                {children} x 6 = {children *6}
            </h2>
            <h2>
                {children} x 7 = {children *7}      
            </h2>
            <h2>
                {children} x 8 = {children *8}
            </h2>
            <h2>
                {children} x 9 = {children *9}
            </h2>
            <h2>
                {children} x 10 = {children *10}
            </h2>
        </div>
    );      
}
export default Table;