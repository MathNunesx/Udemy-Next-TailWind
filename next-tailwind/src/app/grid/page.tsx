
export default function aplicacaoGrid(){
    return (
        // <div className="border-4 p-3 grid grid-cols-3 gap-2">
        // <div className="border-4 p-3 grid grid-cols-1 gap-2 md:grid grid-cols-2 lg:grid grid-cols-4">
        <div className="border-4 p-3 h-screen gap-3 grid grid-cols-3 content-evenly items-start">
         
         {/* <div className="caixa col-start-1 col-end-3">Caixa 1</div> */}
         {/* <div className="caixa col-span-1 md:col-span-2 lg:col-span-4">Caixa 1</div> */}
         <div className="caixa">Caixa 1</div>
         <div className="caixa h-52">Caixa 2</div>
         <div className="caixa">Caixa 3</div>
         <div className="caixa">Caixa 4</div>
         <div className="caixa">Caixa 5</div>
         <div className="caixa">Caixa 6</div>
         <div className="caixa">Caixa 7</div>
         <div className="caixa">Caixa 8</div>
         {/* <div className="caixa col-span-2">Caixa 9</div> */}
         <div className="caixa">Caixa 9</div>

            
        </div>
    )
}