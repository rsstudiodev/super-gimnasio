import { MapPinIcon, PhoneIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline';
import { fotoUbicacion } from '../../content/fotos';
import { sitio } from '../../content/sitio';

export default function Location() {
  return (
    <div className="flex w-full max-w-5xl flex-wrap gap-6">
      <div className="min-h-85 flex-1 basis-70 overflow-hidden rounded-2xl border border-brand-accent/14 bg-brand-surface md:rounded-3xl">
        <img
          src={fotoUbicacion.url}
          alt={fotoUbicacion.alt}
          loading="lazy"
          className="block h-full min-h-85 w-full object-cover saturate-55 brightness-80"
        />
      </div>
      <div className="flex flex-[2] basis-95 flex-col gap-5 rounded-2xl border border-brand-accent/14 bg-brand-surface p-6.5 md:rounded-3xl">
        <div className="flex gap-4 rounded-2xl bg-brand-accent/7 p-5.5">
          <MapPinIcon className="h-6.5 w-6.5 shrink-0 text-brand-accent" strokeWidth={1.5} />
          <div className="flex flex-col gap-1.5">
            <h3 className="m-0 font-label text-lg font-bold text-brand-light">{sitio.nombre}</h3>
            <p className="m-0 text-[15px] font-light leading-snug text-brand-light/66">{sitio.direccion}</p>
          </div>
        </div>
        <div className="flex gap-4 rounded-2xl bg-brand-accent/7 p-5.5">
          <PhoneIcon className="h-6.5 w-6.5 shrink-0 text-brand-accent" strokeWidth={1.5} />
          <div className="flex flex-col gap-1.5">
            <h3 className="m-0 font-label text-lg font-bold text-brand-light">{sitio.telefonoLlamadas}</h3>
            <p className="m-0 text-[15px] font-light text-brand-light/66">{sitio.horarioAtencion}</p>
          </div>
        </div>
        <div className="flex gap-4 rounded-2xl bg-brand-accent/7 p-5.5">
          <BuildingStorefrontIcon className="h-6.5 w-6.5 shrink-0 text-brand-accent" strokeWidth={1.5} />
          <div className="flex flex-col gap-1.5">
            <h3 className="m-0 font-label text-lg font-bold text-brand-light">Estacionamiento y transporte</h3>
            <p className="m-0 text-[15px] font-light leading-snug text-brand-light/66">
              Cajones sobre la avenida y parada de camión a 120 m.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
