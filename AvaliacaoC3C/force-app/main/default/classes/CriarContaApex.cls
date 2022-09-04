public class CriarContaApex {
    @AuraEnabled
    public static void criarContaApex(String nome, String telefone, String descricao ){
        try {
            Account novaConta = new Account();
            
            novaConta.Name = nome;
            novaConta.Phone = telefone;
            novaConta.Description = descricao;

            insert novaConta;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}