afterEach (function () {
    driver.reset() 
     });

describe("Primeiro teste", () => {    
    it("Verifica a o fluxo e utilização do aplicativo em App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE", async () => {
        const textoApp = await $("android.widget.TextView").getText();
        expect(textoApp).toBe("API Demos");
        const botaoapp = await $('android=new UiSelector().text("App")').isDisplayed();
        expect(botaoapp).toBe(true);
        await $('android=new UiSelector().text("App")').click();
        const botaoapp2 = await $('android=new UiSelector().text("Alert Dialogs")').isDisplayed();
        expect(botaoapp2).toBe(true);
        await $('android=new UiSelector().text("Alert Dialogs")').click();
        const botaoapp3 = await $('android=new UiSelector().text("OK CANCEL DIALOG WITH A MESSAGE")').isDisplayed();
        expect(botaoapp3).toBe(true);
        await $('android=new UiSelector().text("OK CANCEL DIALOG WITH A MESSAGE")').click();
        const textoApp4 = await $("android.widget.LinearLayout").getText();
        // expect(textoApp4).toBe("Lorem ipsum dolor sit aie consectetur adipiscing Plloaso mako nuto siwuf cakso dodtos anr koop.");
        const botaoapp4 = await $('android=new UiSelector().text("OK")').isDisplayed();
        expect(botaoapp4).toBe(true);
        await $('android=new UiSelector().text("OK")').click();

    });
        
    it("Verifica a o fluxo e utilização do aplicativo em App/Alert Dialogs/LIST DIALOG", async () => {
            const textoApp = await $("android.widget.TextView").getText();
            expect(textoApp).toBe("API Demos");
            const botaoapp = await $('android=new UiSelector().text("App")').isDisplayed();
            expect(botaoapp).toBe(true);
            await $('android=new UiSelector().text("App")').click();
            const botaoapp2 = await $('android=new UiSelector().text("Alert Dialogs")').isDisplayed();
            expect(botaoapp2).toBe(true);
            await $('android=new UiSelector().text("Alert Dialogs")').click()
            const botaoapp3 = await $('android=new UiSelector().text("LIST DIALOG")').isDisplayed();
            expect(botaoapp3).toBe(true);
            await $('android=new UiSelector().text("LIST DIALOG")').click();
            const textoApp4 = await $("android.widget.TextView").getText();
            expect(textoApp4).toBe("Header title");
            const textoApp5 = await $("id=android:id/text1").getText();
            expect(textoApp5).toBe("Command one");
            const textoApp6 = await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').getText();
            expect(textoApp6).toBe("Command two")
            const botaoapp6 = await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').isDisplayed();
            expect(botaoapp6).toBe(true);
            const textoApp7 = await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').getText();
            expect(textoApp7).toBe("Command three")
            const botaoapp7 = await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').isDisplayed();
            expect(botaoapp7).toBe(true);
            const textoApp8 = await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').getText();
            expect(textoApp8).toBe("Command four")
            const botaoapp8 = await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').isDisplayed();
            expect(botaoapp8).toBe(true);
            
    });

    it("Verifica a o fluxo e utilização do aplicativo em App/Fragment/Hide and Show", async () => {
        const textoApp = await $("android.widget.TextView").getText();
        expect(textoApp).toBe("API Demos");
        const botaoapp = await $('android=new UiSelector().text("App")').isDisplayed();
        expect(botaoapp).toBe(true);
        await $('android=new UiSelector().text("App")').click();
        const botaoapp2 = await $('android=new UiSelector().text("Fragment")').isDisplayed();
        expect(botaoapp2).toBe(true);
        await $('android=new UiSelector().text("Fragment")').click()
        const botaoapp3 = await $('android=new UiSelector().text("Hide and Show")').isDisplayed();
        expect(botaoapp3).toBe(true);
        await $('android=new UiSelector().text("Hide and Show")').click();
    });

    it("Verifica a o fluxo e utilização do aplicativo em App/Action Bar/Display options, verificando a opção DISPLAY_HOME_AS_UP", async () => {
        const textoApp = await $("android.widget.TextView").getText();
        expect(textoApp).toBe("API Demos");
        const botaoapp = await $('android=new UiSelector().text("App")').isDisplayed();
        expect(botaoapp).toBe(true);
        await $('android=new UiSelector().text("App")').click();
        const botaoapp2 = await $('android=new UiSelector().text("App")').isDisplayed();
        expect(botaoapp2).toBe(true);
        const botaoapp3 = await $('android=new UiSelector().text("Action Bar")').isDisplayed();
        expect(botaoapp3).toBe(true);
        await $('android=new UiSelector().text("Action Bar")').click();
        const botaoapp4 = await $('android=new UiSelector().text("Display Options")').isDisplayed();
        expect(botaoapp4).toBe(true);
        await $('android=new UiSelector().text("Display Options")').click();
        const botaoapp5 = await $('android=new UiSelector().text("DISPLAY_HOME_AS_UP")').isDisplayed();
        expect(botaoapp5).toBe(true);
        await $('android=new UiSelector().text("DISPLAY_HOME_AS_UP")').click();
        const textoApp2 = await $("android.widget.TextView").getText();
        expect(textoApp2).toBe("App/Action Bar/Display Options");

    }); 

    it("Verifica a o fluxo e utilização do aplicativo em App/Action Bar/Display options, verificando a opção DISPLAY_SHOW_TITLE", async () => {
        const textoApp = await $("android.widget.TextView").getText();
        expect(textoApp).toBe("API Demos");
        const botaoapp = await $('android=new UiSelector().text("App")').isDisplayed();
        expect(botaoapp).toBe(true);
        await $('android=new UiSelector().text("App")').click();
        const botaoapp3 = await $('android=new UiSelector().text("Action Bar")').isDisplayed();
        expect(botaoapp3).toBe(true);
        await $('android=new UiSelector().text("Action Bar")').click();
        const botaoapp4 = await $('android=new UiSelector().text("Display Options")').isDisplayed();
        expect(botaoapp4).toBe(true);
        await $('android=new UiSelector().text("Display Options")').click();
        const botaoapp5 = await $('android=new UiSelector().text("DISPLAY_SHOW_TITLE")').isDisplayed();
        expect(botaoapp5).toBe(true);
        await $('android=new UiSelector().text("DISPLAY_SHOW_TITLE")').click();

    }); 

    it("Verifica a o fluxo e utilização do aplicativo em App/Action Bar/Display options, verificando a opção DISPLAY_SHOW_CUSTOM", async () => {
        const textoApp = await $("android.widget.TextView").getText();
        expect(textoApp).toBe("API Demos");
        const botaoapp = await $('android=new UiSelector().text("App")').isDisplayed();
        expect(botaoapp).toBe(true);
        await $('android=new UiSelector().text("App")').click();
        const botaoapp3 = await $('android=new UiSelector().text("Action Bar")').isDisplayed();
        expect(botaoapp3).toBe(true);
        await $('android=new UiSelector().text("Action Bar")').click();
        const botaoapp4 = await $('android=new UiSelector().text("Display Options")').isDisplayed();
        expect(botaoapp4).toBe(true);
        await $('android=new UiSelector().text("Display Options")').click();
        const botaoapp5 = await $('android=new UiSelector().text("DISPLAY_SHOW_CUSTOM")').isDisplayed();
        expect(botaoapp5).toBe(true);
        await $('android=new UiSelector().text("DISPLAY_SHOW_CUSTOM")').click();

    }); 

    it("Verifica a o fluxo e utilização do aplicativo em App/Action Bar/Display options, verificando a opção DISPLAY_SHOW_NAVIGATION", async () => {
        const textoApp = await $("android.widget.TextView").getText();
        expect(textoApp).toBe("API Demos");
        const botaoapp = await $('android=new UiSelector().text("App")').isDisplayed();
        expect(botaoapp).toBe(true);
        await $('android=new UiSelector().text("App")').click();
        const botaoapp3 = await $('android=new UiSelector().text("Action Bar")').isDisplayed();
        expect(botaoapp3).toBe(true);
        await $('android=new UiSelector().text("Action Bar")').click();
        const botaoapp4 = await $('android=new UiSelector().text("Display Options")').isDisplayed();
        expect(botaoapp4).toBe(true);
        await $('android=new UiSelector().text("Display Options")').click();
        
    }); 
        
});