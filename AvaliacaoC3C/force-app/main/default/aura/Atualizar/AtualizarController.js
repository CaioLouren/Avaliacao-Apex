({
    enviarController: function (component, event, helper) {
        helper.enviarHelper(component, event)
        this.init(component, event, helper)
    },
    init: function (component, event, helper) {
        component.set('v.columns', [
            { label: 'Nome da conta', fieldName: 'Name', type: 'text' },
            { label: 'Telefone', fieldName: 'Phone', type: 'Phone' },
            { label: 'Descrição', fieldName: 'Description', type: 'text' },
            { label: 'Id', fieldName: 'Id', type: 'Id' }
        ]);
        helper.retornarListaContas(component, event)
    }
})