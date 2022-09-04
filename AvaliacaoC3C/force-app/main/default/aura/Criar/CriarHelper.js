({
    enviarConta: function (component, event) {
        var action = component.get('c.criarContaApex');

        action.setParams({
            nome: component.get('v.nomedaConta'),
            telefone: component.get('v.telefone'),
            descricao: component.get('v.descricao'),
        });

        action.setCallback(this, function (response) {
            let state = response.getState();

            console.log('Voltamos do back-end', state);

            this.showToast(component, event, response);
            this.limparNome(component);
        });

        $A.enqueueAction(action);
    },

    showToast: function (componente, evento, response) {
        let state = response.getState();

        if (state == 'SUCCESS') {
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "title": "Sucesso!",
                "type": "success",
                "message": "O registro foi criado com sucesso."
            });
            toastEvent.fire();
        }
        else {
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "title": "ERROR!",
                "type": "error",
                "message": "O registro não foi criado."
            });
            toastEvent.fire();
        }
    },

    limparNome: function (component) {
        component.set('v.nomedaConta', ' ')
        component.set('v.telefone', ' ')
        component.set('v.descricao', ' ')
    }

})