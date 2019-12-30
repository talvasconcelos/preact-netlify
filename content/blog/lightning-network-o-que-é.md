---
title: 'Lightning Network, o que é?'
date: 2019-12-27T18:04:29.110Z
subtitle: Uma segunda camada, em cima da Bitcoin, que permite pagamentos instantâneos e practicamente sem fees. 
cover: /assets/ln_neon.jpg
tags: 'bitcoin,lightning network'
---
A Lightning Network é um sistema descentralizado para micropagamentos instantâneos e de alto volume que remove o risco de delegar a custódia de fundos a entidades confiáveis (trusted third party).

O Bitcoin, permite que qualquer pessoa envie valor sem um
intermediário ou depositário confiável. Existem, no entanto, algumas desvantagens do design descentralizado do bitcoin. As transacções confirmadas na blockchain do bitcoin levam até uma hora antes de serem confirmadas. Micropagamentos, ou pagamentos de alguns cêntimos, são inconsistentemente confirmados, e as taxas tornam tais transacções inviáveis na rede hoje.

A Lightning Network resolve esses problemas. É uma das primeiras implementações de um contrato inteligente multipartidário (dinheiro programável) usando o script embutido do bitcoin. A Lightning Network lidera o desenvolvimento tecnológico em cálculos financeiros multipartidários com bitcoin. A criação e introdução da Lightning Network foi incentivada pelas limitações que, não só a Bitcoin, mas muitas outras criptomoedas enfrentam. Atualmente, a blockchain da Bitcoin é capaz de processar entre 2 e 7 transacções por segundo (TPS). Na medida em que o ecossistema das criptomoedas cresce e mais pessoas se juntam à rede, o número de transacções transmitidas para a blockchain também aumenta, tornando a rede cada vez mais congestionada. A performance geral fica comprometida, reduzindo drasticamente a usabilidade prática da Bitcoin como uma moeda digital global. Nesse contexto, o LN foi criado como uma tentativa de aliviar a congestão da blockchain da Bitcoin.

## Como funciona
A base da Lightning Network são os canais de pagamento. Dois utilizadores fazem uma transacção multi-assinatura na blockchain (canal de pagamento) em que pelo menos uma delas envia fundos. Cada pessoa tem uma chave privada e cada transacção dentro desse canal só pode ser feita com a assinatura das duas partes. Um canal de pagamento leva cerca de 10 minutos a ser criado, pois é registado na blockchain. Quando estiver aberto, os participantes podem fazer as transacções que quiserem, de forma instantânea usando os fundos "presos" a esse canal. 

As transacções na rede Bitcoin (on-chain) são válidas desde que sejam emitidas para a rede e incluídas num dos blocos minados. No caso da Lightning Network, as transacções emitidas dentro do canal não são emitidas directamente para a blockchain. Isto só acontece quando os participantes decidirem fechar o canal e aí é emitido para a rede o saldo final de ambos os participantes. As transacções dentro da LN, ou do canal de pagamento são chamadas off-chain.

Como um exemplo, vamos imaginar que a Alice quer usar a Lightning Network para trocar Bitcoins com o Bob. Primeiro, criam um canal de pagamento, com uma carteira multi-assinatura. O canal de pagamento actua como um contrato inteligente, a carteira multi-sig actua como um cofre, onde os fundos que serão trocados ficam depositados. Durante toda a duração do canal de pagamento, a Alice e o Bob podem fazer quantas transações off-chain pretenderem.

Após cada transação, ambos os participantes assinam e actualizam as suas próprias cópias dos extratos (balance sheet), que regista continuamente quantas moedas cada um tem. Quando eles estiverem satisfeitos, podem fechar o canal de pagamento e transmitir o balanço final de seus extratos para a blockchain da Bitcoin. O contrato inteligente do LN garante que eles recebem suas Bitcoins, de acordo com a última versão do extrato que ambos assinaram.

Resumindo, os participantes envolvidos só precisam interagir duas vezes com a blockchain da Bitcoin. Uma para abrir o canal de pagamento e outra para fechar, o que significa que todas as outras transações, que são executadas dentro do canal (off-chain), não interagem diretamente com a rede principal.

## Vantagens da Lightning Network
- __Pagamentos instantâneos:__ possibilidade de efetuar pagamentos imediatos sem se preocupar com os tempos de confirmação.

- __Escalabilidade:__ capacidade de processar milhões de transacções por segundo, a custos muito baixos por serem efectuadas fora da rede principal.

- __Micro pagamentos:__ a LN permite transacções tão pequenas quanto 1 satoshi (a unidade do Bitcoin). Por exemplo enviar 0.10€ como agradecimento por um post para alguém do outro lado do mundo.

***

