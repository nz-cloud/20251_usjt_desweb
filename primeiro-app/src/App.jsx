const App = () => {
  return (
    <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
      <label htmlFor='nome' style={{display: 'block', marginBottom: 4}}>Nome:</label>
      
      <input type='text' style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', outline: 'none', width: '100%', borderRadius: 8}} />

      <button type='button' style={{marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', borderRadius: 8, width: '100%', color: 'white', borderStyle: 'hidden', outline: 'none', cursor: 'pointer'}}>
        Enviar
      </button>
    </div>
  )
}

export default App