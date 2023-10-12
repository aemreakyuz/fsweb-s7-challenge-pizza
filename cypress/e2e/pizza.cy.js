/* global cy */

describe("Form Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  it("opens pizza form page", () => {
    cy.url().should("include", "pizza");
  });
  it("inputa text girebilmeli", () => {
    cy.get("[data-cy=name-input]").type("can type text");
  });
  it("birden fazla malzeme seçebilmeli", () => {
    cy.get("[type=checkbox]").check({ multiple: true });
  });
  it("Formu gerekli validasyonlar gerçekleşmeden submit etmemeli", () => {
    cy.get("[data-cy=size-input]").first().check();
    cy.get("[data-cy=hamur-input]").select("İnce");
    cy.get("[data-cy=name-input]").type("a").clear().type("TeknolojikYemekler");
    cy.get("[data-cy=submit-button]").click();
  });
});

describe("Anasayfadan Siparişe", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Anasayfadan Sipariş Sayfasına", () => {
    cy.get("[data-cy=order-pizza]")
      .click()
      .url()
      .should("include", "pizza")
      .visit("http://localhost:3000/pizza");
    cy.get("[data-cy=size-input]").first().check();
    cy.get("[data-cy=hamur-input]").select("İnce");
    cy.get("[data-cy=name-input]").type("a").clear().type("TeknolojikYemekler");
    cy.get("[data-cy=submit-button]")
      .click()
      .url()
      .should("include", "success");
    cy.get(".order-container").contains("SİPARİŞ ALINDI");
  });
});
