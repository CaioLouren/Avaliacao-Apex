({
    enviarHelper: function (component, event, helper) {
        var action = component.get('c.excluirApex')

        action.setParams({
            idAccount: component.get('v.id'),
        });

        action.setCallback(this, function (response) {
            let resposta = response.getReturnValue();
            console.log('voltamos do backend');
            console.log('Recebemos isso', resposta);
            this.showToast(component, event, response);
            this.limparNome(component);
        })

        $A.enqueueAction(action);
    },
    retornarListaContas: function (component, event) {
        var action = component.get('c.BuscarContas')

        action.setCallback(this, function (response) {
            let resposta = response.getReturnValue();
            console.log('voltamos do backend');
            console.log('Recebemos isso', resposta);
            component.set('v.contas', resposta)
        })

        $A.enqueueAction(action);

    },

    showToast: function (componente, evento, response) {
        let state = response.getState();

        if (state == 'SUCCESS') {
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "title": "Sucesso!",
                "type": "success",
                "message": "O registro foi excluido com sucesso."
            });
            toastEvent.fire();
        }
        else {
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "title": "ERROR!",
                "type": "error",
                "message": "O registro não foi excluido."
            });
            toastEvent.fire();
        }
    },

    limparNome: function (component) {
        component.set('v.Id', ' ')
    }

})
