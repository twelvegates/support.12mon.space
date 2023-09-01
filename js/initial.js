/// @ 0.12.4

### {
    id: "a3b18746-1f21-4a3c-a294-9fc7e744c1ab"
    name: "TL速度調節プラグイン"
    version: "1.2.1"
    author: "@Mika@msk.ilnk.info"
    description: "⚠設定→一般→UIのアニメーションを減らす を「オン」にしてください / 一部のノートを削除し、TL速度を調節します。ノートの下の「･･･」メニューから速度を選べます。"
    config: {
      speed1: {
        type: "number"
        label: "速度①(%)"
        default: 70
      }
      speed2: {
        type: "number"
        label: "速度②(%)"
        default: 50
      }
      speed3: {
        type: "number"
        label: "速度③(%)"
        default: 30
      }
      speed4: {
        type: "number"
        label: "速度④(%)"
        default: 20
      }
    }
  }
  
  var th = 100
  
  Plugin:register_note_view_interruptor(
    @(note){
      if (Math:rnd(0,99) >= th) { 
        note = null
      }
      return(note)
    }
  )
  
  Plugin:register_note_action("TL速度100%(通常)" @(){th = 100})
  Plugin:register_note_action(`TL速度 {Plugin:config.speed1}%` @(){th = Plugin:config.speed1})
  Plugin:register_note_action(`TL速度 {Plugin:config.speed2}%` @(){th = Plugin:config.speed2})
  Plugin:register_note_action(`TL速度 {Plugin:config.speed3}%` @(){th = Plugin:config.speed3})
  Plugin:register_note_action(`TL速度 {Plugin:config.speed4}%` @(){th = Plugin:config.speed4})