
export default function AplicacaoFlex(){
    return (
        <div className="border p-3 flex flex-row gap-4">
            {/* justify - grow - basis - order - align itens */}
            <div className="caixa basis-48 order-1"> Caixa 1</div>
            <div className="caixa grow"> Caixa 2</div>
            <div className="caixa order-2"> Caixa 3</div>        
 
            
        </div>
    )
}