# Design Patterns - Typescript :brain:

## Design Patterns (Padrão de Projeto): 

Uma solução para um problema recorrente.

Soluções documentadas que podemos utilizar mais de uma vez.

Nos ajuda a resolver problemas comuns.

#### Características

- Encapsulamento
- Generalidade
- Equilíbrio
- Abstração 
- Abertura
- Combinatório

### Princípio de programação

#### _Abstração_

Ter o seu código apto a mudanças. Por exemplo, pensando em um sistema com um banco de dados X, havendo uma necessidade futura de mudança para Y o código não quebrar por estar engessado.

## Padrões :game_die:

### _Criacional_
Trabalham com a criação de objetos flexíveis e reutilizáveis.

- Factory Method
- Abstract Factory
- Builder

### _Estrutural_
Definem como trabalhar com objetos e classes em estruturas maiores e complexas, e ainda assim flexíveis e eficientes.

- Adapter
- Bridge

### _Comportamental_
Trabalham com a comunicação eficiente e designam as responsabilidades comuns aos objetos.

- Chain of Responsibility

## SOLID 	:repeat:

## S - _Single Responsibility Principle_ (SRP)
 ```
 “Nunca deve haver mais de um motivo para uma classe mudar”
 ```

Responsabilidade única para cada método, função ou classe.

## O - _Open Closed Principle_ (OCP)
```
“Aberto para extensão e fechado para modificação"
```

Métodos menos suscetível a erros e side effects.

## L - _Liskov Substitution Principle_ (LSP)
```
“Uma classe derivada pode ser substituível por sua classe base”
```

Uma classe derivada deve-se comportar igual ao seu pai.

## I - _Interface Segregation Principle_ (ISP)
```
“Classes não devem ser forçadas a depender de métodos que não usam”
```

Separar interfaces grandes em blocos menores.

## D - _Dependency Inversion Principle_ (DIP)
```
"Módulos de alto nível não devem depender de módulos de baixo nível.
Ambos devem depender de abstrações.
Abstrações não devem depender de detalhes”
```
