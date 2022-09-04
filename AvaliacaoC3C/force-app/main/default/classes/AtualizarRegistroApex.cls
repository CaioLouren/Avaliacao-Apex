public with sharing class AtualizarRegistroApex {
    @AuraEnabled
    public static void AtualizarApex(Id idAccount,String name, String telefone, String descricao){
        Account atualizar = [SELECT Id, Name, Phone, Description FROM Account WHERE Id =: idAccount limit 1];
        
        atualizar.Name = name;
        atualizar.Phone = telefone;
        atualizar.Description = descricao;
        update atualizar;
    }
    @AuraEnabled
    public static List<Account> BuscarContas() {
        List<Account> listaContas = [SELECT id, Name, Phone, Description, CreatedDate from Account ORDER BY CreatedDate DESC LIMIT 25];
        return listaContas;
    }
}