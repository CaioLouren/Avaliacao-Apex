({
    enviarController: function (component, event, helper) {
        helper.enviarHelper(component, event)
        component.set("v.showModal", false);
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
    },

    showModel: function (component, event, helper) {
        component.set("v.showModal", true);
    },

    hideModel: function (component, event, helper) {
        component.set("v.showModal", false);
    }
})
