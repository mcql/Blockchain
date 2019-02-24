<template>
  <div class='tradingview-widget-container'>
    <div id='tradingview_37153'></div>
  </div>
</template>

<script>
export default {
  mounted () {
    /* eslint-disable */
    new TradingView.widget({
      autosize: true,
      symbol: 'NASDAQ:AAPL',
      interval: 'D',
      timezone: 'Etc/UTC',
      theme: 'Light',
      style: '1',
      locale: 'zh_CN',
      toolbar_bg: '#f1f3f6',
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: 'tradingview_37153'
    })
  }
  /* eslint-enable */
}
</script>

<style scoped>
#tradingview_37153 {
  height: 539px;
}
.tradingview-widget-container {
  border-bottom: 1px solid #cbcbcb;
  box-sizing: border-box;
}
</style>
