import { Swap as SwapEvent } from '../generated/AngelSwap/AngelSwap'
import { Swap } from '../generated/schema'

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.recipient = event.params.recipient
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1

  entity.save()
}
