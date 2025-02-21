import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {CartService} from "../core/services/cart.service";
import {inject} from "@angular/core";
import {rxMethod} from "@ngrx/signals/rxjs-interop";
import {of, pipe, switchMap, tap} from "rxjs";

type CartState = {
  cart: { id: number, item: string }[];
};

const initialState: CartState = {
  cart: [],
};

export const CartStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, cartService = inject(CartService)) =>({
    loadCart: rxMethod<void>(
      pipe(
        switchMap(() => of(cartService.getItems())),
        tap((res) => {
          patchState(store, { cart: [...res] });
        })
      )
    ),
      addItem: (item: any) => {
        cartService.addItem(item);
      },
      deleteItem: (id: number) => {
        cartService.deleteItem(id);
      }
    })
  ),
);
