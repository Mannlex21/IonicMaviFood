import { State, Action, StateContext } from '@ngxs/store';
import { SetIdProveedor, SetShowForm, SetAccion,
        SetConfirmDialogCancel, SetShowComponentShop, SetShowViewMenu, SetCarrito, SetShowCartModal } from './app.actions';

export interface AppStateModel {
  idProveedor: string;
  accion: string;
  orderId: number;
  showForm: boolean;
  confirmDialogCancel: boolean;
  showComponentShop: string;
  showViewMenu: boolean;
  showCartModal: boolean;
  carrito: Array<any>;
}
@State<AppStateModel>({
  name: 'app',
  defaults: {
    confirmDialogCancel: false,
    idProveedor: '',
    accion: '',
    showComponentShop: 'shop',
    orderId: Math.floor(Math.random() * 23000),
    showForm: false,
    showViewMenu: false,
    showCartModal: false,
    carrito: [],
  }
})
export class AppState {
  @Action(SetIdProveedor)
  setIdProveedor({ patchState }: StateContext<AppStateModel>, { playload }: SetIdProveedor) {
    patchState({ idProveedor: playload});
  }
  @Action(SetAccion)
  setAccion({ patchState }: StateContext<AppStateModel>, { playload }: SetAccion) {
    patchState({ accion: playload});
  }
  @Action(SetShowForm)
  setShowForm({ patchState }: StateContext<AppStateModel>, { playload }: SetShowForm) {
    patchState({ showForm: playload});
  }
  @Action(SetConfirmDialogCancel)
  setConfirmDialogCancel({ patchState }: StateContext<AppStateModel>, { playload }: SetConfirmDialogCancel) {
    patchState({ confirmDialogCancel: playload});
  }

  @Action(SetShowComponentShop)
  setShowComponentShop({ patchState }: StateContext<AppStateModel>, { playload }: SetShowComponentShop) {
    patchState({ showComponentShop: playload});
  }

  @Action(SetShowViewMenu)
  setShowViewMenu({ patchState }: StateContext<AppStateModel>, { playload }: SetShowViewMenu) {
    patchState({ showViewMenu: playload });
  }
  @Action(SetCarrito)
  setCarrito({ patchState }: StateContext<AppStateModel>, { playload }: SetCarrito) {
    patchState({ carrito: playload });
  }
  @Action(SetShowCartModal)
  setShowCartModal({ patchState }: StateContext<AppStateModel>, { playload }: SetShowCartModal) {
    patchState({ showCartModal: playload });
  }
}
