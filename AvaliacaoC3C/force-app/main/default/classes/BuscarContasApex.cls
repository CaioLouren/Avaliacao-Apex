public with sharing class BuscarContasApex {
    @AuraEnabled
    public static List<Account> buscarListaContas(){
        try {
            List<Account> listaContas = [SELECT Id, Name, Phone, Description FROM Account WHERE Phone != NULL ORDER BY CreatedDate DESC LIMIT 10];

            return listaContas;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}