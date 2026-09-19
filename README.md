# House Studio 3D — V2 structural editor

## Open your house

1. Extract the entire ZIP. Do not open the webpage while it is still inside the ZIP.
2. Double-click **index.html**, or **Open-House.bat** on Windows.
3. Use Chrome or Edge with hardware acceleration enabled. No installation, account, internet connection or local server is needed for normal use.

Keep `index.html`, `style.css` and the `assets` folder together.

## Four modes

- **Explore:** rotate, zoom and pan. Switch between 3D, plan, front and rear views; show/hide roof and walls; compare three layouts; choose daylight, sunset or evening.
- **Build:** select a wall, floor, roof, bathroom, door or window. Move the four exterior walls independently; the main floor, slab, rear balcony and roof update with the footprint. Move or resize the entire bathroom (the furniture within its previous footprint moves with it). Add, move, rotate, resize or remove interior walls. Add, move, resize or remove doors and windows, including changing which wall they belong to. Set separate colors for each exterior wall, interior wall, door, window, roof, floor, bathroom surfaces, balcony and garden. Use the property panel for exact measurements or drag supported parts in 3D. Structural changes are included in undo, named layouts and exported JSON. If you detach the bathroom or misalign its doors, a warning prompts you to reconnect access manually.
- **Decorate:** add from the 29-item catalogue. Drag furniture, adjust exact sizes and positions, rotate, duplicate or delete. R rotates; arrows nudge; Delete removes. Ctrl+Z / Ctrl+Y undo and redo. A red selection box and inspector warnings mark overlaps. The 10 cm snap can be disabled.
- **Simulate:** click a floor location or use bed, desk, bathroom, balcony and entrance actions. Blocky has exactly six rectangular parts and uses pathfinding. Daily routine cycles through destinations. Adjust height from 150–195 cm, follow the person and check destination access.

An unfolded sofa bed takes additional space. Loft beds include a ladder; desks underneath are separate movable objects. Furniture can also be placed outside. Bathroom fixtures are editable like other furniture.

## Keep and share ideas

- Changes autosave in the current browser, subject to its local-file storage support.
- **Layouts** saves named copies. Changing presets can be undone.
- **Export JSON** is your portable backup. Import it to another browser or computer.
- The camera button exports a PNG of the 3D scene. **Present** hides the editing panels; Escape exits.
- The slow-orbit button gives a continuous exterior/interior overview. Turn the roof on for an exterior tour.

## Dimensions and assumptions

- Main house: 4.50 × 4.75 m, modelled as outside-face dimensions.
- Bathroom: 1.50 × 3.00 m outside the rear-left wall, running forward along the left side.
- Rear balcony: initially 4.50 × 1.00 m. It follows house width; depth is editable.
- Main walls: 3.00 m above finished floor. The editable visualization uses an approximately 3.84 m roof ridge. Bathroom has a lower extension roof. Roof geometry updates when the house footprint changes.
- Assumed wall thickness: 15 cm. Assumed floor rise above garden: 38 cm.
- Window, door and plumbing positions are approximate, adapted from the supplied reference. The left-side window moves forward to clear the bathroom extension.
- The 2 m front sliding-door assembly has a fixed right pane, leaving roughly 1 m passage through the left side when open. Navigation respects the fixed glass.
- Nominal bed widths: 3 ft, 3.5 ft, 5 ft and 6 ft. Model bed frames are slightly wider than their mattresses; inspector dimensions are the model's outside dimensions, not a furniture brand's specifications.
- Loft mattress top: about 1.88 m; platform underside about 1.53 m. The roughly 1.12 m above the mattress to a 3 m ceiling is not standing space. Confirm ceiling shape, access and safety with your designer.
- The garden is illustrative. It is not a surveyed boundary. The simulation area runs six metres either side of its origin; this is a software limit, not a land measurement.
- The lighting presets are visual, not a location/date-based solar study.

## How the fit checks work

Wall and furniture footprint overlap warnings use rotated rectangles. Rugs are non-blocking. Loft posts and the ladder are checked separately; walking below the loft is blocked when the person is too tall. The animated person uses a circular footprint about 60 cm across at 170 cm height, scaled with height. Pathfinding runs on a 10 cm grid. Taller settings may mark routes blocked in the tighter starting layouts.

These are approximate planning aids, not accessibility or building-code checks. A reachable route may still feel tight. Height fields refer to the main furniture body (for example, desktop height); monitors, taps and foliage can extend beyond it. The loft ladder projects about 43 cm in front of the frame at its default size. Desk sitting, lying down and loft climbing use simplified pose transitions; they are not biomechanical or ladder-safety simulations. The bathroom action enters the room; it does not simulate toileting. The shower is treated as a walk-in zone, not a collision-accurate glass enclosure.

This is a design visualization, not a construction or structural model. Keep your designer's confirmed measurements authoritative.

## Validation

The V2 structural collision/JSON tests and browser-based editor acceptance checks are recorded in `VALIDATION.md`. Browser interaction testing used a mock WebGL renderer; a real GPU render and construction-level checks still require hands-on verification. The original V1 validation record is preserved separately for reference.

## Optional source editing

The ready-to-use app is already built. `src/`, `build.mjs`, `package.json`, the lockfile and tests are included for future edits.

For developers only: `node build-offline.mjs` regenerates `assets/house-studio.js` directly from the included source and original licensed Three.js runtime without installing dependencies. Alternatively, run `npm ci` and `npm run build` for the regular esbuild production build. `node --test tests/structure.test.mjs` runs the new dependency-free structural tests; `npm test` runs all suites after installing dependencies. The app makes no runtime network requests. The original Three.js components remain bundled under the MIT licence.
