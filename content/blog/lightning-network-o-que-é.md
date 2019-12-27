---
title: 'Lightning Network, o que é?'
date: 2019-12-27T18:04:29.110Z
subtitle: >-
  Uma segunda camada, em cima da Bitcoin, que permite pagamentos instantâneos e
  practicamente sem fees. 
cover: /assets/ln_neon.jpg
tags: 'bitcoin lightning network '
---
A Lightning Network é um sistema descentralizado para micropagamentos instantâneos e de alto volume que remove o risco de delegar a custódia de fundos a entidades confiáveis (trusted third party).

O Bitcoin, permite que qualquer pessoa envie valor sem um intermediário ou depositário confiável. Existem, no entanto, algumas desvantagens do design descentralizado do bitcoin. As transacções confirmadas na blockchain do bitcoin levam até uma hora antes de serem confirmadas. Micropagamentos, ou pagamentos de alguns cêntimos, são inconsistentemente confirmados, e as taxas tornam tais transacções  inviáveis na rede hoje. 

A Lightning Network resolve esses problemas. É uma das primeiras implementações de um contrato inteligente multipartidário (dinheiro programável) usando o script embutido do bitcoin. A Lightning Network lidera o desenvolvimento tecnológico em cálculos financeiros multipartidários com bitcoin. A criação e introdução da Lightning Network foi incentivada pelas limitações que, não só a Bitcoin, mas muitas outras criptomoedas enfrentam. Atualmente, a blockchain da Bitcoin é capaz de processar entre 2 e 7 transacções por segundo (TPS). Na medida em que o ecossistema das criptomoedas cresce e mais pessoas se juntam à rede, o número de transacções transmitidas para a blockchain também aumenta, tornando a rede cada vez mais congestionada. A performance geral fica comprometida, reduzindo drasticamente a usabilidade prática da Bitcoin como uma moeda digital global. Nesse contexto, o LN foi criado como uma tentativa de aliviar a congestão da blockchain da Bitcoin.

## Como funciona
Os fundos são colocados num endereço de bitcoin de "canal" multi assinatura pelas duas partes. Este canal é representado como uma entrada no registo público de bitcoin. Para gastar fundos do canal, ambas as partes devem concordar no novo saldo. O saldo actual é armazenado como a transacção mais recente assinada por ambas as partes, gastando do endereço do canal. Para efectuar um pagamento, ambas as partes assinam um novo gasto com a transacção de saída do canal endereço. Todas as transacções de saída antigas são invalidadas ao fazê-lo.
