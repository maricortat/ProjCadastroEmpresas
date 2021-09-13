

function Cadastro(){
    function validateCNPJ(cnpj){
        if(cnpj == ''){
            return false
        }if( cnpj.length != 14){
            return false
        }if(cnpj == '00000000000000' ||
            cnpj == '11111111111111' ||
            cnpj == '22222222222222' ||
            cnpj == '33333333333333' ||
            cnpj == '444444444444444' ||
            cnpj == '555555555555555' ||
            cnpj == '66666666666666' ||
            cnpj == '77777777777777' ||
            cnpj == '88888888888888' ||
            cnpj == '99999999999999'
        ){
            return false
        }

    }
    return(
        <div>
            <div className='head'>
                <h1 className='title'>
                    Cadastre Aqui Sua Empresa
                </h1>
            </div>   
            <div>
                <label/>Cadastre com CNPJ de sua Empresa 
                <br/>   
                <input type='text' id= 'cnpj' className='cnpj'/>
                <br/>
                <button name='button' className='cadastro' onClick= 'validateCNPJ()'>Cadastrar</button>
            </div>

        </div>


    );
}

export default Cadastro;