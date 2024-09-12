# Condition

Conditions are the foundational criteria used to evaluate whether specific operations should be executed within a workflow. They act as filters or checks that must be met for a workflow to proceed. Conditions ensure that actions are only triggered for objects that match the defined criteria.

## Condition attributes

| Attribute          | Description                                          |
|--------------------|------------------------------------------------------|
| **Condition Name** | A unique name for the condition.                     |
| **Description**    | A brief explanation of the condition's purpose.      |
| **Condition Type** | The type of condition.                               |
| **Resource**       | The object or entity to which the condition applies. |

## Condition types

Conditions can be classified into various types based on their evaluation mechanism. Each type has specific attributes and behaviors that determine how the condition is processed.

## Examples

We would like to illustrate the concept of conditions with a few examples:

**Matching conditions based on the certificate common name and public key algorithm:**

- **Condition Name:** Certificate CN contains example.com
- **Description:** This condition checks if the common name of a certificate contains the string "example.com"
- **Condition Type:** Check Field
- **Resource:** Certificate
- **Condition Items:** `Property 'Common Name' contains 'example.com'`

**Matching conditions based on the certificate public key algorithm:**

- **Condition Name:** Certificate Public Key Algorithm is RSA
- **Description:** This condition checks if the public key algorithm of a certificate is RSA
- **Condition Type:** Check Field
- **Resource:** Certificate
- **Condition Items:** `Property 'Public Key Algorithm' equals 'RSA'`
