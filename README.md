# House Studio 3D — V3 surfaces and attached extensions

## Open your house

1. Extract the entire ZIP. Do not open the webpage while it is still inside the ZIP.
2. Double-click **index.html**, or **Open-House.bat** on Windows.
3. Use Chrome or Edge with hardware acceleration enabled. No installation, account, internet connection or local server is needed for normal use.

Keep `index.html`, `style.css` and the `assets` folder together.

## Four modes

- **Explore:** rotate, zoom and pan. Switch between 3D, plan, front and rear views; show/hide roof and walls; restore the supplied room; choose daylight, sunset or evening.
- **Build:** choose a floor or structural element in the model or component list. Main and bathroom floors have eight finishes: veined marble, natural stone, wood planks, herringbone wood, matt porcelain, microcement, terrazzo and ceramic tiles. Change the tint, tile/pattern size and direction independently; the pattern stays intact when recolored. Select an exterior wall and split it using a distance from the section start, or use **Split wall** and click a point in 3D or Plan. Each section has its own color. Select a section and choose **Extend section as bathroom**; its length and outward depth are editable and it stays attached when the house wall moves. The shared connection is one wall with one doorway, rather than overlapping shells. **Draw wall** uses two clicks in Plan to add an interior partition. Doors, windows and partitions remain individually editable. All edits are included in undo, named layouts and JSON exports.
- **Decorate:** add from the 29-item catalogue. Drag furniture, adjust exact sizes and positions, rotate, duplicate or delete. R rotates; arrows nudge; Delete removes. Ctrl+Z / Ctrl+Y undo and redo. A red selection box and inspector warnings mark overlaps. The 10 cm snap can be disabled.
- **Simulate:** click a floor location or use bed, desk, bathroom, balcony and entrance actions. Blocky has exactly six rectangular parts and uses pathfinding. Daily routine cycles through destinations. Adjust height from 150–195 cm, follow the person and check destination access.

An unfolded sofa bed takes additional space. Loft beds include a ladder; desks underneath are separate movable objects. Furniture can also be placed outside. Bathroom fixtures are editable like other furniture.

## Keep and share ideas

- Changes autosave in the current browser, subject to its local-file storage support.
- **Layouts** saves named copies. Restoring the supplied room can be undone. Existing browser autosaves are preserved; choose **My little house** under Explore to restore the supplied reference room.
- **Export JSON** is your portable backup. Import it to another browser or computer.
- The camera button exports a PNG of the 3D scene. **Present** hides the editing panels; Escape exits.
- The slow-orbit button gives a continuous exterior/interior overview. Turn the roof on for an exterior tour.


## Starting room and wall visibility

New visitors start with **My little house**, based on the supplied layout JSON: queen bed, gaming desk and chair, two wardrobes, bathroom fixtures, balcony bench, plants and lamp. The three earlier furniture starter cards have been removed. Existing autosaves and named layouts still load, and importing an older layout attaches its bathroom to the nearest exterior wall.

Use **Keep / hide** above the scene for each main, bathroom and interior wall. Every row offers **Keep full**, **Low wall** (64 cm), or **Hide**. The four quick choices keep only the back, left, right or front walls. Hidden walls also hide their doors/windows visually; collision and navigation continue to respect the real building. Choosing Full walls or Walls hidden overrides the display temporarily; Cutaway walls recalls the individual settings.

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

The current automated tests and editor acceptance checks are recorded in `VALIDATION.md`. Interface tests use a renderer stub because the available preview browser cannot create a WebGL context. They verify editor state and real Three.js geometry, but the final GPU appearance needs verification in a browser with hardware acceleration. Historical V1 and V2 validation records remain below the current record.

## Optional source editing

The ready-to-use app is already built. `src/`, `build.mjs`, `package.json`, the lockfile and tests are included for future edits.

For developers only: `node build-offline.mjs` regenerates `assets/house-studio.js` directly from the included source and original licensed Three.js runtime without installing dependencies. Alternatively, run `npm ci` and `npm run build` for the regular esbuild production build. `node --test tests/structure.test.mjs` runs the dependency-free structural tests; `npm test` runs all suites after installing dependencies. The app makes no runtime network requests. The original Three.js components remain bundled under the MIT licence.
