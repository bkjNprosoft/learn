namespace UtilCurrency {

  /** 한국 통화 기준으로 다른 나라의 화폐로 전환하는 기능을 테스트 */
  export const exchange_base = {
    // 2023-11-01 18:40 기준
    KRW: 1, // 한국 원
    CNY: 0.005385, // 중국 위안
    USD: 0.0007359, // 미국 달러
    JPY: 0.1113, // 일본 엔
    BAHT: 0.02665, // 태국 밧
    DONG: 17.9824, // 베트남 동
  } as const;
  type EXCHANGE_BASE_KRW = typeof exchange_base[keyof typeof exchange_base] | null;

  interface ExchangeRateParams {
    fromCode: EXCHANGE_BASE_KRW;
    fromCost: number;
    toCode: EXCHANGE_BASE_KRW;
  }

  function exchangeRate(data: ExchangeRateParams): number {
    // 기준 화폐를 KRW으로 변환
    let krw = data.fromCost / data.fromCode;
    // 대상 화폐로 변환
    return krw * data.toCode;
  }

  // 10 CNY -> JPY 206.6852367688022
  console.log(exchangeRate({ fromCode: exchange_base.CNY, fromCost: 10, toCode: exchange_base.JPY }));
  // 206.6852367688022 JPY -> CNY 10
  console.log(exchangeRate({ fromCode: exchange_base.JPY, fromCost: 206.6852367688022, toCode: exchange_base.CNY }));
  // 5000 KRW -> BAHT 133.25
  console.log(exchangeRate({ fromCode: exchange_base.KRW, fromCost: 5000, toCode: exchange_base.BAHT }));
  // 133.25 BAHT -> 5000 KRW
  console.log(exchangeRate({ fromCode: exchange_base.BAHT, fromCost: 133.25, toCode: exchange_base.KRW }));
}