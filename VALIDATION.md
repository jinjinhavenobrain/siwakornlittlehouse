# V5.3 floor splitting and fences — 2026-10-29

All 57 automated tests pass. Seven new tests cover edge-to-edge floor removal, clipping and overlapping stair openings, independently restoring overlapping cuts, floor-local persistence through switching and JSON, walking reservations, all three fence styles at a chosen angle and height, malformed active/inactive-floor imports, and real ray intersections proving that both the floor finish and slab are absent inside custom openings in the custom and original-house renderers. Texture painting is stubbed for the ray geometry test; the geometry is real Three.js. The offline production bundle passes syntax checking and git diff passes whitespace checks.

The cloud browser cannot create a WebGL context. A separate, temporary editor test bundle replaces only the renderer with a labeled software wireframe renderer. Normal UI actions verified room creation; the Split floor tool switching to Plan; two-corner selection of a full-width 4.40 m² strip; review before removal; adding three selected fence edges while leaving the fourth open; selecting a fence and changing its style and height; undo/redo; restoring the removed strip while retaining fences; and drawing a standalone 2.70 m fence. This test bundle is excluded from the published application. Final GPU materials/shadows and mobile touch remain unverified.

Custom openings are saved per floor. The custom room slab, original house slab, video-room slab and the ceiling beneath an upper custom opening use the same rectangle subtraction. Existing automatic stair openings remain. Fences are independently editable objects; resizing/restoring an opening does not move or delete its fences. No supplied starting layout or furniture positions were changed.

---

# Free stair placement — 2026-10-29

All 50 automated tests pass. The three new regression checks cover every stair style being added over furniture, partitions and a door in a small room; overlapping connections and oversized flights preserving their exact placement through JSON validation; and overlapping floor openings clipping to the floor without rejection. Existing validation checks still reject invalid numeric dimensions, identifiers, floor links and missing floor chains. Older tests were updated where they previously expected clearance enforcement.

Stair style, rotation, turn, size and movement handlers now edit the chosen connection directly and preserve its position. The clear-space search and placement rejection messages are removed. Inspector copy describes free overlap placement. Both the dependency-free and production builds pass JavaScript syntax checks. No new GPU appearance verification is claimed for this behavior-only change.

---

# V5.1 stair turns and uploaded starting room — 2026-10-26

All 47 automated tests pass. New coverage checks both L-stair turns at all four compass rotations, the top flight's exit side, the matching upper landing and guarded opposite side, unchanged slab footprint, left-turn creation, JSON persistence, legacy right-turn defaults, invalid directions, and the supplied two-floor starting room's saved furniture and ladder placements. Existing single-room, multi-floor and legacy-import tests remain.

A DOM acceptance harness using the actual source and real Three.js geometry checks left-turn selection before adding a floor; left/right edits on existing stairs; independent rotation; undo/redo; mirrored geometry in whole-house preview; JSON export/import; removal of the video-model card; loading the replacement two-floor room with all uploaded fields unchanged except its display name and preset ID; and floor switching. WebGL is explicitly stubbed in this harness, so final GPU appearance is not certified by these checks.

Both offline and production bundles pass JavaScript syntax checks. The earlier preview environment cannot create a WebGL context; this update does not claim a new GPU or mobile-touch verification.

---

# V5 room-creator validation — 2026-10-25

The automated suite passes 42 tests. New coverage includes empty projects and room sizing, the default four-metre room fitting its default stairs, the ten-metre size limit, all eight stair and ladder geometries, matching slab openings, floor elevations, independent furniture/finishes/height/name persistence, four-floor limits, top-floor removal, invalid inactive-floor and connection imports, navigation reservations, and circular tabletop sizing. All earlier supplied-room and video-model tests remain.

A DOM acceptance harness runs the actual application source with real Three.js geometry, real canvas floor textures, and an explicitly stubbed WebGL renderer. It verifies first-visit setup; new projects; simple room dimensions; non-overlapping door/window placement; live tabletop resizing and undo; clothes-rack placement; two separately furnished floors; style conversion, color and rotation; whole-house geometry at two actual elevations; four-floor creation; removal and undo; and full JSON export/import. The earlier editor acceptance harness also passes.

The actual stacked scene geometry was inspected using a software depth-buffer diagnostic. Both the dependency-free offline bundle and regular production bundle pass syntax checks. The preview browser still cannot create a WebGL context. Final GPU appearance and mobile touch interaction remain unverified. Blocky explores a selected floor, without simulating inter-floor climbing. Stairs, guardrails and landings are conceptual visualization geometry.

---

# V4 video-room validation — 2026-10-25

`npm test` passes all 33 tests. New tests cover the independent video room, estimated dimensions, six additional furniture types (35 total), disabled bathroom/balcony topology, a floor cutout matching the stairwell, conservative ladder/stair navigation, overlap-free initial furniture, reachable bed/desk/landing, JSON persistence and invalid reconstruction settings. The earlier tests remain in place.

The actual source also passed the DOM acceptance harness with real Three.js geometry and an explicitly stubbed renderer. In addition to the previous editor flows, it checks both model choices, video room loading, floor/ceiling/stair/frame edits, confirmation of measured dimensions, absence of inferred bathroom/balcony components, ceiling display, model switching and undo, profile-aware structure reset, export, and destination checks. It caught and repaired an indoor spawn falling back outside the room. JavaScript syntax checks, the dependency-free offline builder and the normal production builder pass.

A separate software depth-buffer render of the real scene geometry was inspected for furniture placement, stairs, paneling, curtains, the loft frame and the opening camera. This diagnostic omits GPU shadows and material reflections. The cloud preview browser still reports that WebGL is unavailable, so final GPU appearance and mobile pointer interaction remain unverified.

---

# V3 validation record — 2026-10-24

`npm test` passes all 29 tests. New coverage verifies the supplied default furniture, reachable destinations using its real door positions, exact contiguous wall sections and color inheritance, bathroom attachments on all four sides, a single shared doorway in rendering/navigation topology, legacy doorway migration, and JSON round trips and rejection of invalid floor/wall settings. The earlier furniture/navigation/model tests are retained for compatibility with saved layouts.

A DOM acceptance harness ran the actual application source with real Three.js objects and an explicitly stubbed renderer. Passed: startup with the supplied room and one layout card; all eight floor choices; independent main/bathroom tints; size and direction; undo/redo; exact numeric split; bathroom extension from a selected section; per-wall visibility and quick keep choices; two-click wall drawing and click-to-split in Plan using the real camera projection and ray/plane math; restoring the reference room; and export/import of the edited structure and finishes. No application errors were emitted. Procedural texture maps were generated with a real 2D canvas and inspected separately. The normal esbuild bundle and dependency-free offline bundle both pass JavaScript syntax checks.

**Verification limit:** the preview browser reports that WebGL rendering is unavailable. GPU drawing, texture appearance under the final lighting, 3D pointer picking on a visible GPU model, and mobile interaction have not been verified. A CPU SVG diagnostic is not a substitute for the GPU view. Existing reference furniture is preserved exactly; the toilet retains its small wall-overlap advisory from the supplied dimensions. This is a design visualization, not a construction drawing.

---

# Historical V2 validation record

The V2 self-contained offline script was built and passed `node --check`. All five new core tests passed: exterior wall/floor movement; relocated front door collision geometry; relocated bathroom shell/floor; movable partitions; and structural JSON validation. The offline app was also loaded in a Chromium-based browser harness with a mock WebGL renderer: selecting Build, moving the bathroom together with contained furniture, expanding an exterior wall, adding and moving a window to another wall, changing its individual color, adding a partition, undo/redo and structural JSON persistence all passed with no JavaScript page errors.

**Verification limit:** The test harness substituted a no-op WebGL renderer. It verified scene geometry creation and editor behavior but not final GPU drawing, lighting, actual 3D pointer picking, building-code compliance, construction detailing, mobile usability, or storage on a real `file://` origin. These should be checked on the user’s PC.

---

# Historical V1 validation record — version 1.0.0

## Passed

The production bundle built successfully. All 16 automated tests passed:

1. Everyday studio: no default furniture, wall or doorway overlaps.
2. Everyday studio: all five destinations reachable at 170 cm, with sampled route segments clear of obstacles.
3. Loft workspace: no default furniture, wall or doorway overlaps (the loft headroom advisory remains intentional).
4. Loft workspace: all five destinations reachable at 170 cm, with sampled route segments clear of obstacles.
5. Flexible living: no default furniture, wall or doorway overlaps.
6. Flexible living: all five destinations reachable at 170 cm, with sampled route segments clear of obstacles.
7. Flexible layout's unfolded sofa bed: collision-free and reachable.
8. An object blocking the front doorway correctly prevents access.
9. Invalid and out-of-domain walking targets are rejected.
10. Solid walls and fixed front glass block travel; real door passages remain open for routing.
11. Rotated-coordinate conversion and oriented rectangle collision checks.
12. Layout import validation, including duplicate IDs, invalid dimensions, unknown furniture and unsafe colour values.
13. All 29 catalogue models generate finite geometry.
14. Main structure dimensions and an exactly six-mesh, 1.70 m character with a fitting navigation footprint.
15. Sofa-bed collision footprint matches scaled open geometry.
16. Offline HTML uses bundled local assets, no module loader and no duplicate element IDs.

The main source modules and final bundle also passed JavaScript syntax checks. Source requests no remote assets, APIs, analytics or fonts during normal use.

## Not verified in a browser

The internal preview service started, but browser access was blocked by the environment. No workaround or alternate browser was used. Consequently, visual appearance, GPU performance, pointer interactions, local-file storage, screenshot download and the optional browser-native agent tools have not been verified in an actual browser session.

These are limitations of the verification performed, not claims that those features passed. The packaged webpage is a first playable build for user testing.

## Suggested first check on your PC

1. Extract the ZIP and open index.html in Chrome or Edge.
2. Orbit and zoom, then switch to Front to inspect the shell and roof.
3. Try each of the three starting layouts.
4. In Decorate, add furniture, drag it, rotate it, then Undo.
5. In Simulate, check destination access, then try bed, desk, bathroom and balcony.
6. Save a named layout, export JSON, and import it again.
7. Confirm placement and assumed dimensions with the designer before relying on the model for purchases or construction.
