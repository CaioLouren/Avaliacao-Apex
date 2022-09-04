public with sharing class ExcluirApex {
    @AuraEnabled
    public static void excluirApex(Id idAccount,String name, String telefone, String descricao){
        Account excluir = [SELECT Id, Name, Phone, Description FROM Account WHERE Id =: idAccount limit 1];
        
        delete excluir;
    }
    @AuraEnabled
    public static List<Account> BuscarContas() {
        List<Account> listaContas = [SELECT id, Name, Phone, Description, CreatedDate from Account ORDER BY CreatedDate DESC LIMIT 25];
        return listaContas;
    }
}
