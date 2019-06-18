describe("Select Components", () => {
  it("should be visible in the DOM", () => {
    cy.visit("/#!/Select")
    cy.get('[data-cy="basic-select"]')
  })
  it("should be expandable via keyboard", () => {
    cy.visit("/#!/Select")
    Cypress.on("uncaught:exception", () => {
      return false
    })
    cy.get("body")
      .tab()
      .tab()
      .tab()
      .tab()
      .type("{enter}")
      .tab()
      .tab({ shift: true })
      .type("{downarrow}")
      .tab()
      .tab({ shift: true })
      .type("{uparrow}")
      .tab()
      .tab({ shift: true })
  })
  it("should be selectable via keyboard up/down", () => {
    cy.visit("/#!/Select")
    cy.get("body")
      .tab()
      .tab()
      .tab()
      .tab()
      .type("{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{uparrow}{enter}")
      .wait(300)
    cy.get('[data-cy="basic-select"] input[value="Option 4"]')
  })
  it("should be selectable via keyboard home", () => {
    cy.visit("/#!/Select")
    cy.get("body")
      .tab()
      .tab()
      .tab()
      .tab()

      .type("{enter}")
      .focused()
      .type("{enter}{home}{enter}")
    cy.get('[data-cy="basic-select"] input[value="Option 1"]')
  })
  it("should be selectable via keyboard end", () => {
    cy.visit("/#!/Select")
    cy.get("body")
      .tab()
      .tab()
      .tab()
      .tab()

      .type("{enter}")
      .focused()
      .type("{enter}{end}{enter}")
    cy.get('[data-cy="basic-select"] input[value="Option 8"]')
  })
  it("should be labelled correctly", () => {
    cy.visit("/#!/Select")
    cy.get("body")
      .tab()
      .tab()
      .tab()
      .tab()
      .contains("Basic")
  })
  it("should display values from the options if no labels were provided", () => {
    cy.get('[data-cy="basic-select-no-labels"] input[value="one"]')
      .type("{downarrow}")
      .focused()
      .type("{downarrow}{enter}")
    cy.get('[data-cy="basic-select-no-labels"] input[value="three"]')
  })
  it("should allow multi-select", () => {
    cy.visit("/#!/Select/5").wait(1000)
    cy.tab()
      .tab()
      .tab()
      .type("{enter}")
      .type("{downarrow}{downarrow}{enter}")
      .type("{esc}")
      .type("{downarrow}{downarrow}{downarrow}{enter}")
      .type("{esc}")
      .type("{downarrow}{downarrow}{downarrow}{downarrow}{enter}")
      .wait(300)
    cy.get('[data-cy="multi-select"] input[value="Option 1, Option 4"]').type("{esc}")
  })
  it("should filter content", () => {
    cy.visit("/#!/Select/7").wait(1000)
    cy.tab()
      .tab()
      .tab()
      .type("{enter}")
      .tab()
      .focused()
      .type("8")
      .tab({ shift: true })
      .type("{downarrow}{enter}")
      .wait(100)
    cy.get('[data-cy="filterable-select"] input[value="Option 8"]')
  })
  it("should truncate max options", () => {
    cy.visit("/#!/Select/9").wait(1000)
    cy.tab()
      .tab()
      .tab()
      .type("{enter}")
      .focused()
      .type("{downarrow}{enter}")
    cy.get('[data-cy="maxOptions-select"] input[value="Option 1"]')

    cy.get("body")
      .tab()
      .tab()
      .tab()
      .type("{enter}{downarrow}")
      .focused()
      .type("{downarrow}{downarrow}{downarrow}{enter}")
    cy.get('[data-cy="maxOptions-select"] input[value="Option 2"]')
    cy.get("body")
      .tab()
      .tab()
      .tab()

      .type("{enter}")
      .focused()
      .type("{downarrow}{downarrow}{downarrow}{downarrow}{enter}")
    cy.get('[data-cy="maxOptions-select"] input[value="Option 3"]').should("not.exist")

    cy.reload().wait(1000)
    cy.get("body")
      .tab()
      .tab()
      .tab()
      .type("{enter}")
      .tab()
      .type("8")
      .tab({ shift: true })
      .type("{downarrow}")
      .type("{enter}")
    cy.get('[data-cy="maxOptions-select"] input[value="Option 8"]')
  })
  it("should support a custom option", () => {
    cy.visit("/#!/Select/15").wait(1000)
    cy.tab()
      .tab()
      .tab()
      .type("{downarrow}")
      .focused()
      .type("{downarrow}{end} ")
    cy.focused()
      .type("{enter}")
      .focused()
      .type("hola amigo como estas")
    cy.get("body")
      .tab()
      .tab()
      .tab()
      .type("{enter}")
      .focused()
      .type("{downarrow}{enter}")
    cy.get("body")
      .tab()
      .tab()
      .tab()
      .type("{enter}")
      .focused()
      .type("{downarrow}{end}{enter}")
    cy.get('[data-cy="custom-select"] input[value="chickenshola amigo como estas"]')
  })
  it("should not be accessible when disabled", () => {
    cy.visit("/#!/Select/13").wait(1000)
    cy.tab()
      .tab()
      .tab()

    cy.get('[data-cy="operational-ui__ContextMenu-focus-trap"]').should("have.focus")

    cy.get('[data-cy="disabled-select"]').click()

    cy.get("[role='listbox']").should("not.be.visible")
  })
  it("should allow only one open at a time", () => {
    cy.visit("/#!/Select")
    cy.get("body")
      .tab()
      .tab()
      .tab()
      .tab()
      .type("{downarrow}")
      .tab()
      .contains("Option 4")
      .should("not.exist")
  })
  it("should expose onBlur handler for the custom input ", () => {
    cy.visit("/#!/Select/17").wait(1000)
    cy.tab()
      .tab()
      .tab()
      .type("{downarrow}")
      .focused()
      .type("{downarrow}{end} ")
    cy.focused()
      .type("{enter}")
      .focused()
      .type("{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}")
      .blur()

    cy.get('[data-cy="custom-select"] input[value="chickens are back"]')
  })
})