export const analyzeData = (data) => {
  const recommendations = [];

  // Análise de FIIs
  if (data.fiis) {
    recommendations.push('Considere investir em FIIs devido à sua estabilidade e bons dividendos.');
  }

  // Análise de Criptomoedas
  if (data.crypto) {
    const latestPrice = data.crypto[data.crypto.length - 1][1];
    const previousPrice = data.crypto[0][1];
    if (latestPrice > previousPrice) {
      recommendations.push('Bitcoin está em tendência de alta. Pode ser uma boa oportunidade de investimento.');
    }
  }

  // Análise de Ações
  if (data.stocks) {
    recommendations.push('Considere investir em ações de empresas com bons fundamentos.');
  }

  return recommendations;
};